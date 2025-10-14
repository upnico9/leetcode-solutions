function reverseList(head: ListNode | null): ListNode | null {
    let previous = null;
    let current = head; 


    while (current !== null) {
        const next = current.next;

        current.next = previous;
        previous = current;

        current = next;
    }

    return previous;
};