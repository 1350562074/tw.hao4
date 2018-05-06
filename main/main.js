// Write your cade below:
function main() {
    var readline = require("readline-sync");
    var input =readline.question("");
    var str = ['1','2','3','4'];
    var count1=0,count2=0;
    var inputs=[];
    var result='';
    inputs=input.split("");
    for(var i=0;i<inputs.length;i++)
    {
        if(inputs[i]==str[i])
        {
            count1++;
        }
        else if(inputs[i]!=str[i])
        {
            var flag=0;
            for(var j=0;j<inputs.length;j++)
            {
                if(str[i]==inputs[j])
                flag=1;
            }
            if(flag) count2++;
        }
    }
    result = count1+'A'+count2+'B';
    console.log(result);
};

module.exports = main();