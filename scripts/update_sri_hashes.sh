#!/bin/bash
# Base directory where HTML, CSS, and JS files are located
BASE_DIR="/mnt/c/Users/gm3be/Documents/GitHub/cc0-beats"


# Path to your HTML file
HTML_FILE="${BASE_DIR}/index.html"

# Temporary file for sed
TMP_FILE=$(mktemp)

# Function to update the integrity attribute in the HTML file
update_integrity() {
    local file_type=$1
    local file_path=$2
    local hash=$(openssl dgst -sha384 -binary "$file_path" | openssl base64)

    # Use sed to update the integrity attribute in the HTML file
    sed "s|${file_path}\" integrity=\"sha384-.*\"|${file_path}\" integrity=\"sha384-${hash}\"|" "$HTML_FILE" > "$TMP_FILE" && mv "$TMP_FILE" "$HTML_FILE"
}


# Extract CSS and JS file paths from the HTML file
css_files=$(grep -oP 'href="\K[^"]*.css' "$HTML_FILE" | sed "s|^|${BASE_DIR}/|")
js_files=$(grep -oP 'src="\K[^"]*.js' "$HTML_FILE" | sed "s|^|${BASE_DIR}/|")


# Update integrity hashes for CSS files
for css_file in $css_files; do
    update_integrity "css" "$css_file"
done

# Update integrity hashes for JS files
for js_file in $js_files; do
    update_integrity "js" "$js_file"
done

# Cleanup
rm -f "$TMP_FILE"
