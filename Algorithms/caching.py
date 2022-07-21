cache = {}
def add_to_80(n):
    if n in cache:
        return cache[n]
    else:
        cache[n] = n + 80
        return cache[n]

result = add_to_80(5)
print(result)