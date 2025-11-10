import os
import sys
from datetime import datetime

# --- 1. Validate commit message ---
if len(sys.argv) < 3:
    print("Usage: python push.py <Day_Number> 'Commit Message'")
    print("Example: python push.py 2 'Learned HTML forms'")
    sys.exit(1)

day = sys.argv[1]
message = sys.argv[2]
date_today = datetime.now().strftime("%d %b %Y")

# --- 2. Git operations ---
commit_message = f"Day {day} [{date_today}]: {message}"

os.system("git add .")
os.system(f'git commit -m "{commit_message}"')
os.system("git push origin main")

print(f"\n✅ Successfully pushed: {commit_message}")
