check() {
  x=$1
  y=$2
  if [[ $(($x%2)) == 0 ]]; then 
    for ((i=0; i<$ind; i++)) do echo -n ' '; done
    echo $x
    x=$(($x + 2))
    ind=$(($ind + 1))
  else
    x=$(($x + 1))
  fi
  if [[ $x -le $y ]]; then
    check $x $y
  fi
}

main() {
  echo $FUNCNAME
  ind=1
  check $1 $2 $ind
}

main $1 $2