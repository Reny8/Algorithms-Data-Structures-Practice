def add_to_80(n, dict):
    if n in dict:
        return dict[n]
    else:
        dict[n] = n + 80
        return dict[n]

cache = {}
result = add_to_80(5, cache)
print(result)