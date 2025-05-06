cd /home/younger/My_web/avocado/public/images/other
n=1
foldername=$(basename "$PWD")
for file in *.jpg; do
  mv "$file" "${foldername}${n}.jpg"
  n=$((n+1))
done