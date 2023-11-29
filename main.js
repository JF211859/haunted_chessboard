

function waitForButtonPress() {
    return new Promise(resolve => {
        function handleButtonClick(event) {
            // Remove event listeners once a button is clicked
            document.querySelector("#button1").removeEventListener('click', handleButtonClick);
            document.querySelector("#button2").removeEventListener('click', handleButtonClick);

            // Resolve the promise with the button number
            resolve(event.target.id === "button1" ? 1 : 2);
        }

        document.querySelector("#button1").addEventListener('click', handleButtonClick);
        document.querySelector("#button2").addEventListener('click', handleButtonClick);
    });
}


function changeImage1(image){
    if (image){
        document.querySelector("#character1").style.visibility = 'visible';
        document.querySelector("#character1").src = 'images/' + image;
    }
    else{
        document.querySelector("#character1").style.visibility = 'hidden';
    }
}

function changeEnvironment(image){
    document.querySelector("#environment").src = 'images/' + image;
}

function changeImage2(image){
    if (image){
        document.querySelector("#character2").style.visibility = 'visible';
        document.querySelector("#character2").src = 'images/' + image;
    }
    else{
        document.querySelector("#character2").style.visibility = 'hidden';
    }
}

function addLore(text) {
    document.querySelector("#lorearea").innerHTML += text;
}

function changeLeftButtonText(text) {
    document.querySelector("#button1").innerHTML = text;
}

function changeRightButtonText(text) {
    document.querySelector("#button2").innerHTML = text;
}

changeImage1("Aria.jpg");
changeImage2();

changeEnvironment("door.jpg");

addLore(`You find yourself standing at the entrance of the ominous mansion, its dilapidated exterior barely visible through the thick canopy of trees. The wind whispers eerie melodies as you take a deep breath, summoning the courage to face Count Sagittarius, the infamous vampire who has plagued the villages for centuries. The creaking door groans open, revealing a dark corridor leading to three rooms.`);

changeLeftButtonText("Enter the Mansion");
changeRightButtonText("Enter the Mansion");

waitForButtonPress().then(() => {dustyChamber()});

function dustyChamber() {
    addLore(`\nRoom 1: The Dusty Chamber \nYou cautiously step into the first room, the air heavy with the scent of decay. Moonlight filters through the tattered curtains, revealing an old wooden table. On it, you spot a gleaming silver cross. How do you proceed?`);

    changeImage2("cross.jpg");
    changeEnvironment("chamber.jpg");

    changeLeftButtonText("Pick up the silver cross.");
    changeRightButtonText("Investigate the room further before deciding.");

    waitForButtonPress().then(decision => {decision === 1 ? dimlyLitHallway() : deathInDustyChamber()});
}

function dimlyLitHallway() {
    addLore(`\nRoom 2: The Dimly Lit Hallway\nMoving on, you enter a dimly lit hallway adorned with portraits of unknown faces. At the end of the hall, a faded tapestry hides a mysterious door. Upon opening it, you discover a room containing an ancient-looking wooden stake. What will you do?`);

    changeImage2("stake.jpg");
    changeEnvironment("hallway.jpg");

    changeLeftButtonText("Take the wooden stake.");
    changeRightButtonText("Examine the tapestry before deciding.");

    waitForButtonPress().then(decision => {decision === 1 ? mustyStudy() : deathInHallway()});
}

function mustyStudy() {
    addLore(`\nRoom 3: The Musty Study\nAs you enter the final room, the musty smell of aged books fills the air. A massive desk dominates the center of the room, and as you approach, you notice a screwdriver lying beside an open drawer. What's your next move?`);

    changeImage2("screwdriver.jpg");
    changeEnvironment("library.jpg");

    changeLeftButtonText("Grab the screwdriver.");
    changeRightButtonText("Explore the contents of the open drawer before deciding.");

    waitForButtonPress().then(decision => {decision === 1 ? atticConfrontation() : deathInStudy()});
}

function atticConfrontation() {
    addLore(`\nThe Attic Confrontation\nArmed with the silver cross, wooden stake, and screwdriver, you make your way up to the attic. The air grows colder as you push aside a cobweb-covered trapdoor, revealing a hidden passage. In the attic, you find Count Sagittarius waiting, sitting across an old chessboard\nCount Sagittarius: Ah, mortal, you dare enter my domain. But I offer you a chance. Play a game of chess, and if you win, you may leave unharmed.`);

    changeImage2("Sagittarius.jpg");
    changeEnvironment("attic.jpg");

    changeLeftButtonText("Accept the challenge and play chess.");
    changeRightButtonText("Refuse the challenge and attack immediately.");

    waitForButtonPress().then(decision => {decision === 1 ? chessMatch() : deathAttic()});
}

function chessMatch() {
    addLore(`\nAs the chess match progresses, you notice Count Sagittarius making moves that defy the rules. It becomes clear she's cheating. What will you do?`);

    changeEnvironment("board.jpg");

    changeLeftButtonText("Silently plan your next move without addressing the cheating.");
    changeRightButtonText("Confront Count Sagittarius about the cheating.");

    waitForButtonPress().then(decision => {decision === 2 ? finalConfrontation() : deathViaChess()});
}

function finalConfrontation() {
    addLore(`\nUnable to tolerate the cheating, you decide to take action. With the wooden stake in hand, you launch a surprise attack on Count Sagittarius. The vampire hisses, caught off guard. After a fierce struggle, you successfully drive the stake through her heart\nCount Sagittarius: You may have defeated me, mortal, but beware the darkness that lurks in the hearts of men.\nWith those ominous words, Count Sagittarius disintegrates into dust. You emerge from the mansion victorious, the curse lifted. The villages will no longer live in fear, and you return home a hero.\nCongratulations! You have successfully slayed Count Sagittarius and brought peace to the haunted woods. The villagers will forever be grateful for your bravery. The end.`);

    changeImage2();

    changeLeftButtonText("Congratulations! Count Sagittarius has been defeated!");
    changeRightButtonText("Congratulations! Count Sagittarius has been defeated!");
}

function deathInDustyChamber() {

    addLore(`\nYou decide to investigate the room further before making a decision. As you explore, you notice an old, ornate mirror on the wall. Curiosity gets the better of you, and you peer into the reflective surface.\nSuddenly, the mirror begins to ripple, and a ghostly figure materializes before your eyes. It's the spirit of a previous adventurer who dared to enter Count Sagittarius's mansion.\nDismissing the ghostly apparition as a mere illusion, you reach for the silver cross. The moment your fingers make contact with the cursed object, a surge of malevolent energy courses through your body. You feel an otherworldly force draining the life out of you.\nIn an instant, your vision blurs, your limbs grow weak, and you collapse to the floor. The ghostly figure watches in silence as your life force is absorbed into the haunted mansion, your fate forever entwined with those who met a similar demise.\nGhost: Another soul claimed by the darkness within these walls. May you find peace in the afterlife.`);

    changeImage1();
    changeImage2("ghost.jpg");

    changeLeftButtonText("Refresh To Try Again");
    changeRightButtonText("Refresh To Try Again");

}

function deathInHallway() {
    addLore(`\nIntrigued by the faded tapestry at the end of the dimly lit hallway, you decide to examine it more closely. As you approach, you notice intricate details woven into the fabric—a depiction of Count Sagittarius surrounded by ominous symbols.\nSuddenly, the figures on the tapestry seem to come to life, their eyes glowing with an eerie light. The tapestry itself begins to writhe and shift, as if possessed by a malevolent force. Before you can react, shadowy tendrils shoot out from the tapestry, ensnaring you in a supernatural grip.\nYou frantically try to free yourself from the grasp of the shadowy tendrils, but their grip tightens with each struggle. The entities in the tapestry seem to feed on your fear, draining your life force. The air grows thick with a suffocating darkness as the tendrils tighten their hold.\nAs the last breath escapes your lips, the tapestry absorbs your essence, adding another doomed soul to its cursed design. The hallway returns to its silent, foreboding stillness.`);

    changeImage1();
    changeImage2("tappestry.jpg");

    changeLeftButtonText("Refresh To Try Again");
    changeRightButtonText("Refresh To Try Again");

}

function deathInStudy() {
    addLore(`\nIntrigued by the contents of the open drawer in the musty study, you decide to explore further. As you pull the drawer open, you discover a collection of ancient documents, some written in an unknown language. Among them is a small, ornate box.\nDriven by curiosity, you decide to open the ornate box without further investigation. As the lid creaks open, a burst of foul-smelling gas escapes, enveloping you in its toxic fumes. Coughing and gasping for air, you stumble back, realizing too late that the box was a trap.\nThe toxic substance quickly takes its toll on your body, weakening your muscles and clouding your vision. The room spins, and you collapse to the floor, helpless against the deadly poison. The last thing you see is the room fading into darkness.`);

    changeImage1();
    changeImage2("gas.jpg");

    changeLeftButtonText("Refresh To Try Again");
    changeRightButtonText("Refresh To Try Again");
}

function deathAttic() {
    addLore(`\nRefusing to engage in Count Sagittarius's twisted game of chess, you decide to take matters into your own hands. With the wooden stake in hand, you launch a surprise attack on the vampire. Count Sagittarius hisses, caught off guard, but she swiftly counters your assault.\nUndeterred by the vampire's resistance, you press on with your attack. However, Count Sagittarius, despite her initial surprise, is a formidable opponent. She swiftly evades your strikes, demonstrating supernatural speed and strength.\nSuddenly, she retaliates, grabbing your arm with inhuman strength. In a flash, she sinks her fangs into your neck, draining your life force. Weakened and defenseless, you crumple to the floor as the vampire stands over you, triumphant.\nCount Sagittarius: Foolish mortal, you underestimated the power that courses through my veins. Now, you shall join the legion of the fallen.`);

    changeImage1();

    changeLeftButtonText("Refresh To Try Again");
    changeRightButtonText("Refresh To Try Again");
}

function deathViaChess() {
    addLore(`\nAs the chess match with Count Sagittarius progresses, you silently observe her cheating moves. Despite realizing her deceit, you choose not to confront her directly, opting to formulate a strategy in silence.\nYou silently adapt your strategy, trying to outmaneuver Count Sagittarius despite her cheating. However, the vampire's supernatural cunning proves too much. With each move, she gains an advantage, and the chessboard becomes a battlefield where your every move is anticipated.\nSensing your impending defeat, Count Sagittarius smirks, reveling in her manipulation. Suddenly, the chess pieces on the board seem to come to life, moving of their own accord. In an instant, the room darkens, and an otherworldly force overwhelms you.\nCount Sagittarius: You thought you could outsmart me, mortal. Now, your fate is sealed.\nAs the darkness consumes you, your consciousness fades away. The last thing you hear is Count Sagittarius's chilling laughter.`);

    changeImage1();

    changeLeftButtonText("Refresh To Try Again");
    changeRightButtonText("Refresh To Try Again");
}
