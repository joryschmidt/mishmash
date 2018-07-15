fizzBuzz = (num) ->
  ans = ''
  if num % 3 is 0 then ans += 'Fizz'
  else if num % 5 is 0 then ans += 'Buzz'
  if ans then ans else num
  
printfizz = ->
  for num in [1..100]
    ans = ''
    if num % 3 is 0 then ans += 'Fizz'
    else if num % 5 is 0 then ans += 'Buzz'
    if ans then console.log ans else console.log num 

isBuzz = (num) ->
  num if num % 5 is 0