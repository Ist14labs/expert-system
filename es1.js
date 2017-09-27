var myApp=angular.module('es1App', []);
myApp.controller('questionController', function ($scope) {
    var answersMap=[
        {
            id:0,
            question:'Есть ли значки псевдографики? ┴╤ ▄╠┼╦╘╥ ',
            answers:[
                {
                    answer:'Исключительно псевдографика',
                    finalNode:true,
                    result:'KOI8-R ↠ CP-866'
                },
                {
                    answer:'Псевдографика вперемешку с буквами',
                    finalNode:false,
                    nextNode:1
                },
                {
                    answer:'Нет или почти нет псевдографики',
                    finalNode:false,
                    nextNode:4
                }
            ]
        },
        {
            id:1,
            question:'Буквы «п» и «я» через символ? ╬п╨п╟я▐ я█п╩п╣ ',
            answers:[
                {
                    answer:'Да',
                    finalNode:true,
                    result:'UTF-8 ↠ KOI8-R'
                },
                {
                    answer:'Нет',
                    finalNode:false,
                    nextNode:2
                }
            ]
        },
        {
            id:2,
            question:'Eсть ли подавляющее превосходство символов «╨║╕» плюс иногда «░»  и заглавные буквы?',
            answers:[
                {
                    answer:'Да',
                    finalNode:true,
                    result:'UTF-8 ↠ CP866'
                },
                {
                    answer:'Нет',
                    finalNode:false,
                    nextNode:3
                }
            ]
        },
        {
            id:3,
            question:'Есть ли черные квадраты? ▐ █ ▀',
            answers:[
                {
                    answer:'Да',
                    finalNode:true,
                    result:'ISO8859-5 ↠ CP866'
                },
                {
                    answer:'Нет',
                    finalNode:true,
                    result:'CP866 ↠ KOI8-R'
                }
            ]
        },
        {
            id:4,
            question:'Есть ли повторящийся через каждую букву символ(ы)',
            answers:[
                {
                    answer:'Да',
                    finalNode:false,
                    nextNode:5
                },
                {
                    answer:'Нет',
                    finalNode:false,
                    nextNode:8
                }
            ]
        },
        {
            id:5,
            question:'Это символы «Р», «С»? СЌР»РµРєС‚СЂРёС„Р ',
            answers: [
                {
                    answer: 'Да',
                    finalNode: true,
                    result:'UTF8 ↠ Win-1251'
                },
                {
                    answer:'Нет',
                    finalNode:false,
                    nextNode:6
                }
            ]
        },
        {
            id:6,
            question:'Это символ «Ð»? Ð³ÑƒÐ±ÐµÑ€Ð½Ð¸Ð¹ ',
            answers:[
                {
                    answer:'Да',
                    finalNode:true,
                    result:'Win-1252'
                },
                {
                    answer:'Нет',
                    finalNode:false,
                    nextNode:7
                }
            ]
        },
        {
            id:7,
            question:'Это символ «♦»? ♦5♦@♦=♦8♦9♦ 4♦0 ',
            answers:[
                {
                    answer:'Да',
                    finalNode:true,
                    result:'UTF16 ↠ CP866'
                },
                {
                    answer:'Нет',
                    finalNode:false,
                    nextNode:8
                }
            ]
        },
        {
            id:8,
            question:'Буквы-русские?',
            answers:[
                {
                    answer:'Все нерусские',
                    finalNode:false,
                    nextNode:10
                },
                {
                    answer:'Вперемешку',
                    finalNode:false,
                    nextNode:9
                },
                {
                    answer:'Все (почти) русские',
                    finalNode:false,
                    nextNode:13
                }
            ]
        },
        {
            id:9,
            question:'Какие "посторонние" символы встречаются?',
            answers:[
                {
                    answer:'§ўћѓђ',
                    finalNode:true,
                    result:'Win-1251 ↠ ISO8859-5'
                },
                {
                    answer:'╪¤■√ўЇЄ',
                    finalNode:true,
                    result:'Win-1251 ↠ CP866'
                }
            ]
        },
        {
            id:10,
            question:'Большинство букв с умляутами и т.п.? åêòðèôèÉÆÉËÁ ',
            answers:[
                {
                    answer:'Нет',
                    finalNode:true,
                    result:'CP 866 → ISO 8859-5'
                },
                {
                    answer:'Да',
                    finalNode:false,
                    nextNode:11
                }
            ]
        },
        {
            id:11,
            question:'Встречаются ли «небуквенные» значки «®£¨«¬¤»?',
            answers:[
                {
                    answer:'Да',
                    finalNode:true,
                    result:'CP866 → Win-1251(2)'
                },
                {
                    answer:'Нет',
                    finalNode:false,
                    nextNode:12
                }
            ]
        },
        {
            id:12,
            question:'Заглавные или строчные?',
            answers:[
                {
                    answer:'вперемешку (äØÚÐæØï î)',
                    finalNode:true,
                    result:'ISO 8859-5  → Win-1252'
                },
                {
                    answer:'ЗАГЛАВНЫЕ',
                    finalNode:true,
                    result:'KOI8-R → Win-1252'
                },
                {
                    answer:'строчные',
                    finalNode:true,
                    result:'Win-1251 → Win-1252'
                }
            ]
        },
        {
            id:13,
            question:'Все буквы, которые должны быть строчными-заглавные? бНОПНЯ',
            answers:[
                {
                    answer:'Да',
                    finalNode:true,
                    result:'Win-1251 → KOI8-R (или наоборот)'
                },
                {
                    answer:'Нет',
                    finalNode:false,
                    nextNode:14
                }
            ]
        },
        {
            id:14,
            question:'заглавные чередуются и есть символ «�»?аЛаЕаКб�б�аИб�',
            answers:[
                {
                    answer:'Да',
                    finalNode:true,
                    result:'UTF-8 → ISO 8859-5'
                },
                {
                    answer:'Нет',
                    finalNode:true,
                    result:'KOI8-R → ISO 8859-5 (или наоборот) или ISO 8859-5 → Win-1251'
                }
            ]
        }
    ];

    var getFromObjById=(arr,id)=>arr.filter(i=>i.id==id)[0];

    var initialNode=answersMap[0];
    $scope.currentNode=initialNode;
    $scope.isFinal=false;
    $scope.handleButtonClick=function(){
        var answer=$scope.currentNode.answers[this.$index];
        if(answer.finalNode){
            $scope.isFinal=true;
            $scope.result=answer.result;
        }
        else {
            $scope.currentNode=getFromObjById(answersMap, answer.nextNode)
        }
    }
    $scope.reset=function () {
        $scope.currentNode=initialNode;
        $scope.isFinal=false;
    }
})