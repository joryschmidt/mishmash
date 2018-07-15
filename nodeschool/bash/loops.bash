x=$1
y=$2
while [[ $x -lt $y ]]; do
  if [[ $(($x%2)) == 0 ]]; then echo $x; fi
  x=$(($x+1))
done