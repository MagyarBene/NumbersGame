export function kopar(usernum, randnum)
{
    if(usernum<randnum) return "A te számod kisebb."
    else if(usernum>randnum) return "A te számod nagyobb"
    else if (usernum==randnum) return "Helyes megfejtés!"
}