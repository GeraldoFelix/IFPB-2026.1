package ListaUm;

public class Node {
    private int Value;
    private Node Prox;


    public Node (int Value, Node Prox) {
        this.Value = Value;
        this.Prox = Prox;
    }

    public Node (int Value) {
        this.Value = Value;
        this.Prox = null;
    }

    public void setValue(int value) {
        Value = value;
    }

    public void setProx(Node prox) {
        Prox = prox;
    }

    public Node getProx () {
        return Prox;
    }

    public int getValue () {
        return Value;
    }

}
