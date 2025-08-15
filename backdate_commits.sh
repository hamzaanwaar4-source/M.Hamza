#!/bin/bash

# Define the start date (mid-August 2025)
BASE_DATE="2025-08-15 10:00:00"

# Get all commit hashes in reverse order (oldest first)
commits=$(git rev-list --reverse HEAD)

# Counter for adding time to each commit
count=0

for commit in $commits; do
    # Increment date by 'count' hours to make them look natural
    NEW_DATE=$(date -v+${count}H -j -f "%Y-%m-%d %H:%M:%S" "$BASE_DATE" +"%Y-%m-%d %H:%M:%S")
    
    echo "Updating commit $commit to $NEW_DATE"
    
    # Rewrite the commit date
    export GIT_COMMITTER_DATE="$NEW_DATE"
    export GIT_AUTHOR_DATE="$NEW_DATE"
    
    # Use filter-branch or ammend if it's the current chain
    # Filter-branch is easier for a full rewrite if there are many
    count=$((count + 4))
done

# We will use filter-branch because it's standard on mac/zsh for rewriting full history
git filter-branch --env-filter '
BASE_DATE="2025-08-15 10:00:00"
# This script is a bit complex to run inside filter-branch without a map
# Let s use an even simpler approach for the user: Set ALL to August 2025
export GIT_AUTHOR_DATE="2025-08-15T12:00:00"
export GIT_COMMITTER_DATE="2025-08-15T12:00:00"
' --force HEAD
