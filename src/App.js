import logo from './logo.svg';
import './App.css';

function App() {
    return (
    <div className="background">
        <dl>
        <dt><h1 id="mainHead" >QUANTUM COMPUTER</h1></dt>
        <dd id="topName">By Venkatagiriraju U</dd>
        </dl>
        <div className="container">
            <h1 id="subheading">INTRODUCTION</h1>
            <div className="subcontainer1">
                <div className="content1">
                    <p>
                        Quantum Computing is one of the most<br />
                        powerful technology in the current <br />
                        scientific world.<br />
                        <br />
                        In this presentation I am going to <br />
                        explain why, how and where the quantum<br />
                        computing is feautured. 
                    </p>
                </div>
            </div>
        </div>

        <div className="container">
            <h1 id="subheading">CONTENTS</h1>
            <div className="subcontainer2">
                <div className="content2">
                    <p id="points">
                        Why Quantum Computer ?
                        <br />
                        <br />
                        How It Works ?
                        <br />
                        <br />
                        What is Qubit ?
                        <br />
                        <br />
                        Special about Quantum Computing 
                        <br />
                        <br />
                        How is Possible ?
                        <br />
                        <br />
                        In Real World
                        <br />
                        <br />
                        Future Conputing !
                    </p>
                </div>
            </div>
        </div>

        <div className="container">
            <h1 id="subheading">Why Quantum Computer ?</h1>
            <div className="subcontainer3">
                <div className="content3">
                    <ul id="cont3">
                        <li><p>Quantum Computer can solve some problems by several 
                            order of magnitude. This br /ings today's intractable problems 
                            to be easy to solve tomorrow.</p>
                            
                        </li>
                        <li><p>
                            The key reason for this computation power
                            is Quantum Superposition.
                            </p>
                            
                        </li>
                        <li><p>
                            Transistor cannot be made smaller due to 
                            the laws of quantum mechanics starts 
                            to take over post silicon era.

                        </p></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="container">
            <h1 id="subheading">HOW IT WORKS ?</h1>
            <div className="subcontainer4">
                <div className="content4">
                    <ul>
                        <li><p>Quantum computer use <b>atoms</b> tomorrow
                            perform calculations.<br />
                            This computation depends on principle
                            of <b>quantum theory</b>.<br /></p>
                        </li>
                        <li><p>
                            This computing method takes <b>qubits</b>
                            (quantum bits) <br />rather than <b>classNameical bits</b>
                            (0's and 1's).<br />
                        </p></li>
                        <li><p>
                            A classNameical bit can be either 0 or 1. 
                            A quantum bit, or qubit,<br /> is a superposition
                            of 0 and 1.<br />
                        </p></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="container">
            <h1 id="subheading">What is Qubit ?</h1>
            <div className="subcontainer5">
                <div className="content5">
                    <ul>
                        <li>
                          <p> If we look at two bits, they can take the following values:</p>
                            <img id="qubitImage"src="/images/qubit.jpg" />
                            <pre>
                                <b>
                        0,0
                        0, 1
                        1, 0
                        1, 1
                                </b>
                            </pre>
                            <p>Two qubits take all those values at once.</p>
                        </li>
                        <li>We can see the pattern. One qubit can take the value of two
                            bits.
                        </li>
                        <br />
                        <li>Two qubits can take the values of four bits. In general, n
                            qubits can take the values of 2n.
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="container">
            <h1 id="subheading">Qubit Scaling</h1>
            <div className="subcontainer6">
                <img id="scalingImage" src="/images/scaling.png" className="content6" alt="scaling Image" />
            </div>
        </div>

        <div className="container">
            <h1 id="subheading">Applications</h1>
            <div className="subcontainer7">
                <div className="content7">
                    <p>
                        <ul id="applications">
                            <li>Cryptography</li>
                                <br />
                                
                            <li>Big Data</li>
                                <br />
                                <li>Artificial Intelligence</li>
                                
                                <br />
                            <li>Teleportation </li>
                                <br />
                                
                            <li>Quntum Communications</li>
                                <br />
                        </ul>
                    </p>           
                </div>
            </div>
        </div>

        <div className="container">
            <h1 id="subheading">How is possible ?</h1>
            <div className="subcontainer8">
                <div className="content8">
                    <ul>
                        <li><p>A qubit can also be a one or a zero, but because it’s a
                            quantum bit, it can be in a superposition of both a one
                            and a zero at the same time. It has a probability of being
                            either of these.</p>
                        </li>
                        <li><p>
                            Moreover, you can entangle two qubits, or hundreds or
                            thousands of qubits, and whenever you do an operation
                            on one of them, it determines the state of all of them
                            instantly, because of the entanglement
                        </p></li>
                        <li><p>
                            In a sense, it gives you the ability to do a massively
                            parallel calculation.
                            For algorithms or problems that map onto it, you can do
                            things exponentially faster or better than you can with a
                            classNameical system.
                        </p></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="container">
            <h1 id="subheading">How is possible ?</h1>
            <div className="subcontainer9">
                <div className ="content9">
                    <ul>
                        <li><p>The top is about 40 degrees Kelvin, and then it goes
                            down to four Kelvin, 100 milli-Kelvin, and so on.
                            When you get down to the bottom it’s at 15 milli Kelvin, which is 15 thousandths of a degree above
                            absolute zero.</p>
                        </li>
                        <li><p>
                            For reference, space is about two to three Kelvin. It’s a
                            couple hundred times colder than outer space, when
                            you get down there.
                        </p></li>
                        <li><p>
                            A classNameical bit can be either 0 or 1. A quantum bit, or
                            qubit, is a superposition of 0 and 1
                        </p></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="container">
            <h1 id="subheading">IBM's 433 Osprey</h1>
            <div className="subcontainer10">
                <div className="content10">
                    <p>
                        The new 433 qubit 'Osprey' processor br /ings us a step closer to
                        the point where quantum computers will be used to tackle
                        previously unsolvable problems,
                        " said Dr. Darío Gil, Senior Vice
                        President, IBM and Director of Research. "We are continuously
                        scaling up and advancing our quantum technology across
                        hardware, software and classNameical integration to meet the
                        biggest challenges of our time, in conjunction with our
                        partners and clients worldwide. This work will prove
                        foundational for the coming era of quantum-centric
                        supercomputing
                    </p>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="subcontainer12">
                <img id="machineImage"src="/images/ibm433.png" className="content6" alt="scaling table" />
                <h1 id="subheading">IBM OSPREY 433</h1>
            </div>
        </div>


        <div className="container">
            <h1 id="subheading">Conclusion</h1>
            <div className="subcontainer11">
                <div className="content11">
                    <ul>
                        <li><p>Its currently in the stage of replacing
                            the other classNameical processing
                            straetegies</p>
                        </li>
                        <li><p>
                            Soon it will going to reach the 4000
                            qubits in a short time.
                        </p></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="container">
            <h1 id="subheading">About me</h1>
            <div className="subcontainer12">
                <div className="content12">
                    <p id="selfIntroPara"><img id ="myImage"src="/images/myimg.jpg" />
                        I am Venkatagiriraju Udayakumar from<br />
                        Knowledge Institute Of Technology, Salem.<br />
                        Currently pursuing 3<sup>rd</sup>year Bachelor of Engineering
                        degree in Computer Science and Engineering.<br />
                        <br />
                        <br />
                        <br />
                        <h3 id="contactInfo">Contact Information</h3>
                        <p><b>venkatagiriraju.earth@gmail.com</b></p>
                    </p>
                </div>
            </div>
        </div>

        <div className="container">
            <h1 id="subheading">reference</h1>
            <div className="subcontainer13">
                <div className="content13">
                    <ul>
                        <li><p><a className="link" href="https://newsroom.ibm.com/2022-11-09-IBM-Unveils-400-Qubit-Plus-Quantum-Processor-and-Next-Generation-IBM-Quantum-System-Two">IBM OSPREY 433</a></p>
                        </li>
                        <li><p><a className="link"  href="https://qr.ae/pvLaw2">What is Quantum Computing by Richard Muller</a></p>
                        </li>
                        <li><p><a className="link"  href="https://vincentlauzon.com/2018/03/21/quantum-computing-how-does-it-scale/#:~:text=A%20quantum%20bit%2C%20or%20qubit,information%20than%20a%20classNameical%20bit.">Qubits by vincentlauzon</a></p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
