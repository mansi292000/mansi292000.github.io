let tog = 1
let rollingSound = new Audio('rpg-dice-rolling-95182.mp3')
let winSound = new Audio('winharpsichord-39642.mp3')


let p1sum = 0
let p2sum = 0


function play(player, psum, correction, num) {
    let sum
    if (psum == 'p1sum') {

        p1sum = p1sum + num

        if (p1sum > 100) {
            p1sum = p1sum - num
            // sum = p1sum
        }
        if (p1sum == 3){
            p1sum = 22
        }
        if (p1sum == 7) {
            p1sum = 17
        }
        if (p1sum == 9){
            p1sum = 13
        }
        if (p1sum == 28) {
            alert("Wow! You used crop rotation. Move to 14.")
            p1sum = 85 
        }
        if (p1sum == 38) {
            p1sum = 57
        }
        if (p1sum == 41) {
            p1sum = 62
        }
        if (p1sum == 51) {
            p1sum =71
        }
        if (p1sum == 67) {
            p1sum = 93
        }
        if (p1sum == 29) {
            p1sum = 11
        }
        if (p1sum == 21) {
            p1sum = 18
        }
        if (p1sum == 46) {
            p1sum = 25
        }
        if (p1sum == 53) {
            p1sum = 32
        }
        if (p1sum == 78) {
            p1sum = 42
        }
        if (p1sum == 94) {
            p1sum = 65
        }
        if (p1sum == 92) {
            p1sum = 68
        }
        if (p1sum == 99) {
            p1sum = 77
        }

        sum = p1sum



    }

    if (psum == 'p2sum') {

        p2sum = p2sum + num

        if (p2sum > 100) {
            p2sum = p2sum - num
            // sum = p1sum
        }
        if (p2sum == 3){
            p2sum = 22
        }
        if (p2sum == 7) {
            p2sum = 17
        }
        if (p2sum == 9){
            p2sum = 13
        }
        if (p2sum == 28) {
            alert("Wow! You used crop rotation. Move to 14.")
            p2sum = 85 
        }
        if (p2sum == 38) {
            p2sum = 57
        }
        if (p2sum == 41) {
            p2sum = 62
        }
        if (p2sum == 51) {
            p2sum =71
        }
        if (p2sum == 67) {
            p2sum = 93
        }
        if (p2sum == 29) {
            p2sum = 11
        }
        if (p2sum == 21) {
            p2sum = 18
        }
        if (p2sum == 46) {
            p2sum = 25
        }
        if (p2sum == 53) {
            p2sum = 32
        }
        if (p2sum == 78) {
            p2sum = 42
        }
        if (p2sum == 94) {
            p2sum = 65
        }
        if (p2sum == 92) {
            p2sum = 68
        }
        if (p2sum == 99) {
            p2sum = 77
        }
        sum = p2sum



    }


    document.getElementById(`${player}`).style.transition = `linear all .5s`





    if (sum < 10) {

        document.getElementById(`${player}`).style.left = `${(sum - 1) * 62}px`
        document.getElementById(`${player}`).style.top = `${-0 * 62 - correction}px`


    }

    else if (sum == 100) {
        winSound.play()
        if (player == 'p1') {
            alert("Congratulations Red! You finally achieved the goal of reversing soil erosion.")
        }
        else if (player == 'p2') {
            alert("Congratulations Yellow! You finally achieved the goal of reversing soil erosion.")
        }
        location.reload()
    }

    else {

        numarr = Array.from(String(sum))
        n1 = eval(numarr.shift())
        n2 = eval(numarr.pop())
        // console.log(n1, n2)

        if (n1 % 2 != 0) {

            if (n2 == 0) {
                document.getElementById(`${player}`).style.left = `${(9) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
            }
            else {
                document.getElementById(`${player}`).style.left = `${(9 - (n2 - 1)) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`

            }

        }
        else if (n1 % 2 == 0) {
            if (n2 == 0) {

                document.getElementById(`${player}`).style.left = `${(0) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
            }
            else {

                document.getElementById(`${player}`).style.left = `${(n2 - 1) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`
            }

        }



    }
}


document.getElementById("diceBtn").addEventListener("click", function () {
    rollingSound.play()
    num = Math.floor(Math.random() * (6 - 1 + 1) + 1)
    document.getElementById("dice").innerText = num
    
    //dice image changer 
    var dice=['<img src="1.png" style="object-fit:scale-down;width:100px;height:100px;border: transparent 1px #CCC"/>',
    '<img src="2.png" style="object-fit:scale-down;width:100px;height:100px;border: transparent 1px #CCC"/>',
    '<img src="3.png" style="object-fit:scale-down;width:100px;height:100px;border: transparent 1px #CCC"/>',
    '<img src="4.png" style="object-fit:scale-down;width:100px;height:100px;border: transparent 1px #CCC"/>',
    '<img src="5.png" style="object-fit:scale-down;width:100px;height:100px;border: transparent 1px #CCC"/>',
    '<img src="6.png" style="object-fit:scale-down;width:100px;height:100px;border: transparent 1px #CCC"/>'];
    document.getElementById('diceee').innerHTML = dice[num-1];


    if (tog % 2 != 0) {
        document.getElementById('tog').innerText = "Red's Turn"
        play('p1', 'p1sum', 0, num)

    }

    else if (tog % 2 == 0) {
        document.getElementById('tog').innerText = "Yellow's Turn"

        play('p2', 'p2sum', 55, num)

    }

    tog = tog + 1




})