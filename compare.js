export function kopar(usernum, randnum)
{
    if(usernum<randnum) return "Kisebb"
    else if(usernum>randnum) return "nagyobb"
    else if (usernum==randnum) return "helyes megfejtes"
}