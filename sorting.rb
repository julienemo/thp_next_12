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
  array
end

def selection_sort(array)
  s = array.length - 1
  (0..s).each do |i|
    max = i
    (i + 1..s).each do |j|
      max = j if array[j] > array[max]
    end
    array[max], array[i] = array[i], array[max] if max != i
  end
  array
end

def insertion_sort(array)
  insert_count = 0
  s = array.length - 1
  (0..s).each do |i|
    x = array[i]
    j = i
    while j.positive? && array[j - 1] < x
      insert_count = 0
      array[j] = array[j - 1]
      j -= 1
    end
    array[j] = x
  end
  array
end

def partition(array, left, right)
  p = array[((left + right) / 2).ceil]
  while left <= right
    left += 1 while array[left] > p
    right -= 1 while array[right] < p
    if left <= right
      array[left], array[right] = array[right], array[left]
      left += 1
      right -= 1
    end
  end
  left
end

def quick_sort(array, left = 0, right = array.length - 1)
  if array.length > 1
    index = partition(array, left, right)
    quick_sort(array, left, index - 1) if left < index - 1
    quick_sort(array, index, right) if index < right
  end
  array
end

def merge_sort(array)
  if array.length > 1
    mid = (array.length / 2).floor
    left = array[0..mid-1]
    right = array[mid..-1]
    merge_sort(left)
    merge_sort(right)
    i, j, k = 0, 0, 0
    while (i < left.length) && (j < right.length)
      if left[i] > right[j]
        array[k] = left[i]
        i += 1
      else
        array[k] = right[j]
        j += 1
      end
      k += 1
    end
    while i < left.length
      array[k] = left[i]
      i += 1
      k += 1
    end
    while j < right.length
      array[k] = right[j]
      j += 1
      k += 1
    end
  end
  array
end

# in ruby, array is passed by reference
# or every object is passed by reference
# ex:
# array = [1, 2, 3, 4, 5]
# array = array
# array[3] = 'a'
# puts copy // [1, 2, 'a', 4, 5]
# puts array // [1, 2, 'a', 4, 5]
# the real copying is array.dup
