# This is used by forrestry, so if they change their requirements; eg they need it to bind to a different port, this will need updating>
# Forrestry needs the --renderToDisk option
hugo server -D -E -F --enableGitInfo --renderToDisk -d public
