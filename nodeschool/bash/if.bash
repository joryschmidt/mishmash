if [[ $1 -lt 12 ]]; then
  echo "Good morning!"
elif [[ $1 -lt 18 ]]; then
  echo "Good afternoon!" 
else 
  echo "Good evening!" 
fi