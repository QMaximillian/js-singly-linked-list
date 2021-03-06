class Node {
  constructor(value){
    this.value = value
    this.next = null
  }  
}


class LinkedList {
  constructor(){
    this.head = null
    this.tail = null
    this.length = 0
  }

  isEmpty(){

    return this.length === 0 
  }

  get(index){
    if (index < 0 || index > this.length || this.isEmpty()){
      return null
    }

    if (index === 0) {
      return this.head
    }

    if (index === this.length - 1){
      return this.tail
    }

    let currentNode = this.head
    let iterator = 0
    while (iterator < index) {
      iterator++
      currentNode = currentNode.next
    }

    return currentNode
  }

  push(value) {
    const newNode = new Node(value)

    if (this.isEmpty()) {
      // If the LinkedList is empty, this is the first node we are adding. We'll point the head and tail to this node
      this.head = newNode
      this.tail = newNode
    } else {
      console.log(this.head)
      // Set the current tails next property to point at the node we just created
      this.tail.next = newNode
      // Set the current tail to be the node we just created
      this.tail = newNode
    }

    this.length++
  }

  pop(){
    if (this.isEmpty()) {
      return null
    } else if (this.length === 1) {
      const nodeToRemove = this.head
      this.head = null
      this.tail = null
      this.length--
      return nodeToRemove
    } else {
      // Prepare to iterate
      // Set our currentNode to this first item in the LinkedList
      let currentNode = this.head
      // Grab the tail node we want to remove from the LinkedList and store it to return later
      const nodeToRemove = this.tail

      // Create a variable to hold the secondToLastNode so we can update the properties on it, specifically it's next property
      let secondToLastNode;
      
      // currentNode wil always be true, so park it here until condition it met
      while (currentNode) {
        // If the condition is satisfied, then I am at the second to last node. Set the secondToLast node as the current node and break the loop
        if (currentNode.next === this.tail) {
          secondtoLastNode = currentNode
          break;
        }

        // Other wise, set the currentNode to the next node in the LinkedList. This will trigger the if condition in the while loop to run again
        currentNode = currentNode.next
      }

      // Cleanup

      // Because we remove the last item in the LinkedList, we have to point the next property of our new last node to null
      secondToLastNode.next = null
      
      // This is now the last node in the LinkedList which makes it the tail, let's set the tail to it
      this.tail = secondToLastNode;
      
      // We've removed an element so we have to decrement the length
      this.length--

      // Return the node we removed
      return nodeToRemove
    }
  }

  
}

const firstNode = 'Quinn'
const secondNode = 'AOL'
const thirdNode = 'Sparky'

const linkedList = new LinkedList()

linkedList.isEmpty()
linkedList.push(firstNode)
linkedList.push(secondNode)
linkedList.push(thirdNode)

linkedList.get(1)