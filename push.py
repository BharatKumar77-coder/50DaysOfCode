import os
import sys

if len(sys.argv) < 2:
    print("Usage: python push.py 'Your commit message'")
    sys.exit(1)

message = sys.argv[1]
os.system("git add .")
os.system(f'git commit -m "{message}"')
os.system("git push origin main")
