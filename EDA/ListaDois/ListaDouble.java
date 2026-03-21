package ListaDois;

public class ListaDouble<T> {

    private int Size;
    private Node<T> firts;

    public ListaDouble() {
        this.firts = null;
    }

    public void Add(T value) {
        Node<T> no = new Node<T>(value);

        if (firts == null) {
            firts = no;
        } else {
            Node<T> x = firts;
            while (x.getProx() != null) {
                x = x.getProx();
            }
            x.setProx(no);
            no.setAnte(x);
        }
        Size++;
    }

    public void Add(int index, T value) {
        Node<T> novo = new Node<T>(value);
        if (index >= Size) {
            Add(value);
        } else {
            Node<T> antigo = getIndex(index);
            if (index == 0) {
                novo.setProx(antigo);
                firts.setAnte(novo);
                firts = novo;
            }
            else {
                Node<T> anterior = antigo.getAnte();

                novo.setAnte(antigo.getAnte());
                novo.setProx(antigo);
                anterior.setProx(novo);
                antigo.setAnte(novo);
            }

        }
        Size++;
    }

    public Node<T> penultimate() {
        Node<T> penultimate = null;
        Node<T> current = firts;

        while (current != null && current.getProx() != null) {
            penultimate = current;
            current = current.getProx();
        }
        return penultimate;
    }

    public void remove() {
        Node<T> penultimate = penultimate();

        if (penultimate != null) {
            penultimate.setProx(null);
            Size--;
        }
    }

    public void remove(int index) {
        if (index == Size-1) {
            remove();
            return;
        }
        else {
            Node<T> current = getIndex(index);
            if (index == 0) {
                firts = firts.getProx();
            }
            else {
                Node<T> anterior = current.getAnte();
                anterior.setProx(current.getProx());
                Node<T> proximo = current.getProx();
                proximo.setAnte(current.getAnte());
            }
        }
        Size--;
    }

    public Node<T> getIndex(int index) {
        Node<T> current = firts;

        for (int i = 0; i < index; i++) {
            if (current == null) return null;
            current = current.getProx();
        }

        return current != null ? current : null;
    }

    public int getSize() {
        return Size;
    }

    @Override
    public String toString() {
        return "ListaDouble{" +
                "Size=" + Size +
                ", firts=" + firts +
                '}';
    }
}