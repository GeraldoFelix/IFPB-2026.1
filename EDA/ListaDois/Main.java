package ListaDois;

public class Main {
    public static void main(String[] args) {
        ListaDouble Mylist = new ListaDouble();
        Mylist.Add(5);
        Mylist.Add(1);
        Mylist.Add(2);
        Mylist.Add(100);
        Mylist.Add(0,999);
        Mylist.remove(0);


        System.out.println("Lista dois: " + Mylist.getIndex(0).getValue());
        System.out.println(Mylist.toString());
    }
}
