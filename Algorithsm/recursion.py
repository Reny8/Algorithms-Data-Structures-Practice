# IDENTFY BASE CASE
# IDENTIFY THE RECURSIVE CASE
# RETURN WHEN NEEDED USUALLY WITH TWO RETURNS 
def inception(counter):
    if counter == 3:
        return print("Done")
    counter += 1
    print(counter)
    return inception(counter)
# times = 0
# inception(times)

# WRITE TWO FUNCTIONS THAT FIND THE FACTORIAL OF ANY NUMBER.
# ONE SHOULD USE RECURSIVE, THE OTHER SHOULD JUST USE A FOR LOOP

def find_factorial_recursive(number,answer=1):
    if number == 1:
        return print(answer)
    answer *= number
    number -= 1
    return find_factorial_recursive(number,answer)
find_factorial_recursive(2)

def find_factorial_iterative(number):
    answer = number
    for num in range((number-1), 1,-1):
        answer *= num
    return print(answer)
# find_factorial_iterative(5)
