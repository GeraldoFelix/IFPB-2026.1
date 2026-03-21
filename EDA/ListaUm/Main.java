package ListaUm;

public class Main {
    public static void main(String[] args) {
        LinkLista Mylist = new LinkLista();

        Mylist.Add(5);
        Mylist.Add(1);
        Mylist.Add(2);
        Mylist.Add(100);


        System.out.println(Mylist.getSize());
    }
}
