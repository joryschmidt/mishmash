
case "$1" in 
  (jpeg|png|gif)
    echo "It is $1."
    ;;
  (*)
    echo "$1 is not an image!"
    ;;
esac