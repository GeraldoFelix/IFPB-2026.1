package ListaDois;

public class Node<T> {
    private T Value;
    private Node<T> Ante;
    private Node<T> Prox;

    public Node (T Value, Node<T> Prox) {
        this.Value = Value;
        this.Prox = Prox;
        this.Ante = null;
    }

    public Node (T Value) {
        this.Value = Value;
        this.Prox = null;
        this.Ante = null;
    }

    public void setValue(T value) {
        Value = value;
    }

    public void setProx(Node<T> prox) {
        Prox = prox;
    }

    public void setAnte(Node<T> ante) {
        Ante = ante;
    }

    public Node<T> getProx () {
        return Prox;
    }

    public T getValue () {
        return Value;
    }

    public Node<T> getAnte() {
        return Ante;
    }
}
