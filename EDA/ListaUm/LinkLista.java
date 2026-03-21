package ListaUm;

public class LinkLista {
    private int Size;
    private Node firts;

    public LinkLista() {
        this.firts = null;
    }

    public void Add(int Value) {
        Node no = new Node(Value);
        if (firts == null) {
            firts = no;
        }
        else {
            Node x = firts;
            while (x.getProx() != null) {
                x = x.getProx();
            }
            Node n = new Node(Value);
            x.setProx(n);
        }
        this.Size++;
    }

    public Node penultimate () {
        Node penultimate = null;
        Node current = firts;
        while (current != null) {
            if (current.getProx() != null) {
                penultimate = current;
                current = current.getProx();
            }
        }
        return penultimate;
    }

    public void Remove() {
        Node remove = penultimate();
        remove.setProx(null);
        Size--;
    }

    public void Exists() {

    }

    public int getSize() {
        return Size;
    }


}
