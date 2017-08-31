function ListNode(val) {
    this.val = val;
    this.next = null;
}

var addTwoNumbers = function (l1, l2) {
    var carry = 0;
    var result = new ListNode(0);
    var dummy = new ListNode(0);
    dummy = result;
    while (l1 !== null || l2 !== null) {
        var x = (l1 !== null) ? l1.val : 0;
        var y = (l2 !== null) ? l2.val : 0;
        sum = carry + x + y;
        carry = Math.floor(sum / 10);
        result.next = new ListNode(sum % 10);
        result = result.next;
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }
    if (carry > 0) {
        result.next = new ListNode(carry);
    }
    return dummy.next;
};