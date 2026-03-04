public class Quick {

    static void quicksort(int[] Arr, int p, int r) {
        if (p < r){
            int q = Partition(Arr, p, r);
            quicksort (Arr, p, q-1);
            quicksort (Arr, q+1, r);
        }
    }

    static int Partition(int[] arr, int p, int r) {
        int pivot = arr[r];
        int i = p -1;
        for (int j = p; j < r - 1; j++) {
            if (arr[j] <= pivot) {
                i++;
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }

        }
        int temp = arr[i+1];
        arr[i+1] = arr[r];
        arr[r] = temp;
        return i + 1;
    }


    public static void main(String[] args) {
        int[] arr = {2,5,6,1,20,9};
        quicksort(arr, 0, arr.length - 1);
        for (int item : arr) {

            System.out.println(item + " ");

        }
    }
}
