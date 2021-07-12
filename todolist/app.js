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
        let li = $("<li>", { text: userInput.val()});
        li.css({
            'margin-left': '100px',
            'margin-right': '100px'
        });
        li.hide();
        ul.append(li);
        li.fadeIn(300);
        li.animate({
            'margin-left': '0px',
            'margin-right': '0px'
        }, 500);

        todoMap.push({
            ind: todoMap.length + 1,
            text: userInput.val()
        });
        localStorage.setItem('Todo_list', JSON.stringify(todoMap));

        userInput.val('');

        let deleteButton = $('<button>', { text: 'X' });
        li.append(deleteButton);
        deleteButton.click(deleteTodoItem);

        li.click(() => {
            li.toggleClass('done');
        });

        function deleteTodoItem() {
            li.addClass('del');
            li.animate({
                'margin-left': '200px',
                'margin-right': '200px'
            }, 500).fadeOut(500).remove(500);
            
        }
    }

    // for (let i = 2; i < todoMap.length + 2; i++) {
    //     const element = localStorage.getItem('Todo_list');
    //     let li = $("<li>", { text: element.text });
    //     li.hide();
    //     ul.append(li);
    //     li.fadeIn(300);
    //     li.animate({
    //         'margin-left': '0px',
    //         'margin-right': '0px'
    //     }, 500);
    // }

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