# Networking Introduction

[Room](https://tryhackme.com/room/introtonetworking)

## The OSI Model [^1]

A standardized computer networking theory, a compact version of the TCP/IP concept used in real-world networking.

There are 7 layers of OSI:

- Layer 7 -- Application

- Provides an interface for applications to use in order to transmit data. When data is given to the application layer, it is passed down into the __presentation layer__.

- Layer 6 -- Presentation

- Receives data from the __application layer__. This layer translates the data into a standardized format, handling any encryption, compression, or other transformations, before passing it down to the __session layer__.

- Layer 5 -- Session

- Receives data from __presentation layer__. This layer tries to set up a connection with the computer that originally sent the data across the network, if it can't the session layer returns an error and the process ends. If a connection is established then the session layer maintains it and works with the session layer of the remote computer to handle communications. Once the connection is successfully established the data is handed down to the __transport layer__.

- Layer 4 -- Transport

- A multipurpose layer. The first of which is to choose the protocol over which the data is to be transmitted. The most common protocols are TCP[^2] and UDP[^3]; with TCP the transmission is connection-based which means that a connection between the computers and established an maintained for the duration of the request. This allows for a reliable transmission, as the connection can be used to ensure that the packets all get to the right place. A TCP connection allows the two computers to remain in constant communication to ensure that the data is sent an an acceptable speed, and than any lost data is re-sent. With UDP, the opposite is true, packets if data are essentially thrown at the receiving computer -- if it can't keep up then that's its problem. What this means is that TCP would usually be chosen for situations where accuracy is favored over speed, and UDP would be used in situations where speed is more important. With a protocol selected, the transport layer than divides the transmission up into bite-sized pieces called *segments* for TCP or *datagrams* from UDP, which makes it easier to transmit the message successfully.

- Layer 3 -- Network

- This layer is responsible for location the destination of your request. The network layer takes the IP address for a webpage and figures out the best route to take. Logical addresses(aka IP addresses) are used to provide order to networks, categorizing them and allowing us to properly sort them. The most popular form of logical addressing is the IPV4 format.

- Layer 2 -- Data Link

- The data link layer focuses on the physical addressing of the transmission. It receives a packet from the __networking layer__ and adds the physical (MAC) address of the receiving endpoint. Inside every network enabled computer is a Network Interface Card (NIC) which comes with a unique [MAC (Media Access Control)](https://en.wikipedia.org/wiki/MAC_address) address to identify it. The data link layer also checks received information to make sure that is hasn't been corrupted during transmission, which could very well happen when the data is transmitted by layer 1: the __physical layer__

- Layer 1 -- Physical

- The physical layer is right down to the hardware of the computer. This is where the electrical pulses that make up the data transfer over a network are sent and received. It's the job of the physical layer to convert the binary data of the transmission into signals and transmit them across the network, as well as receiving incoming signals and converting them back into binary data

## Encapsulation

The process of breaking down data to be sent(or vice versa if receiving data) and adding headers that corolate to the OSI model(and adding a trailer during the data link stage)

## TCP/IP Model

A very similar model to OSI and serves as the basis for real-world networking. The layer between the two models differs with OSI having more layers to its process

TCP/IP Layers:

- Application(Same as application, presentation and session in OSI)

- Transport(Same as transport in OSO)

- Internet(Same as network in OSI)

- Network Interface(Same as data link and physical in OSI)

TCP is connection based, meaning a process known as the *three-way handshake* takes place.

When you attempt to make a connection, your computer first sends a special request to the remote server indicating that it wants to initialize a connection. This request contains something called a SYN (short for synchronize) bit, which essentially makes first contact in starting the connection process. The server will then respond with a packet containing the SYN bit, as well as another "acknowledgement" bit, called ACK. Finally, your computer will send a packet that contains the ACK bit by itself, confirming that the connection has been setup successfully. With the three-way handshake successfully completed, data can be reliably transmitted between the two computers. Any data that is lost or corrupted on transmission is re-sent, thus leading to a connection which appears to be lossless.

### Footnotes

[^1]: OSI: Open Systems Interconnection

[^2]: TCP: Transmission Control Protocol

[^3]: UDP: User Datagram Protocol
