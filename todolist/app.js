$(function(){
    let buttonEnter = $('#enter');
    let userInput = $('#userInput');
    let ul = $('ul');
    let localStorage = window.localStorage;
    let todoMap = [
        {
            ind: 1,
            text: 'example'
        }
    ]

    function inputLength() {
        return !!userInput.val();
    }

    function createTodo() {
        let li = $("<li>");
        li.append(document.createTextNode(userInput.val()));
        ul.append(li);
        todoMap.push({
            ind: todoMap.length + 1,
            text: userInput.val()
        });
        localStorage.setItem('Todo_list', JSON.stringify(todoMap));
        userInput.val('');

        let deleteButton = $('<button>');
        deleteButton.append(document.createTextNode('X'));
        li.append(deleteButton);
        deleteButton.click(deleteTodoItem);

        li.click(() => {
            li.toggleClass('done');
        });

        function deleteTodoItem() {
            li.fadeOut(1000);
            //li.addClass('delete');
        }
    }

    function changeListAfterKeypress(event) {
        if (inputLength() && event.which === 13) {
            createTodo();
        }
    }

    buttonEnter.click(function() {
        if (inputLength()) {
            createTodo();
        }
    });
    userInput.keypress(changeListAfterKeypress);
})

// в local storage записывать 