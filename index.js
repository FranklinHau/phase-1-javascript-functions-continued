function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`

}
saturdayFun();

const mondayWork = function (activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}
mondayWork();

function wrapAdjective (stupid = "*"){
    const part1 = function(stupid2 = 'special'){
    return `You are ${stupid}${stupid2}${stupid}!`
};
    return part1;
}