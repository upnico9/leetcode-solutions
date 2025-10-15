var deleteDuplicates = function(head) {
    let currentList = head;

    while (currentList && currentList.next) {
        if (currentList.val == currentList.next.val) {
            currentList.next = currentList.next.next;
        } else {
            currentList = currentList.next; 
        }
    }

    return head;
};