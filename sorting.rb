# TODO: test whether variables pass by ref
# ex : array = somearray
# copy = array
# modify copy
# test whether array is also altered
# look up how to make a new array from an existing array as in js


def bubble_sort(array)
  bubble_count = 0
  copy = array
  length = copy.length
  continue = false
  (0..length - 2).each do |i|
    (0..length - 2).each do |m|
      bubble_count += 1
      if array[m] < array[m + 1]
        array[m], array[m + 1] = array[m + 1], array[m]
        continue = true
      end
    end
    return array unless continue
  end
  puts "Bubble sort => #{array} with #{bubble_count} comparaisons"
  array
end

def select_sort(array)
  
end