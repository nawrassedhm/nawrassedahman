import { Heading } from '@chakra-ui/react'
import React from 'react'
import { Footnote as Note } from './Footnote'
import { LinkTooltip as Tip } from './LinkTooltip'

export const History = () => (
  <Heading
    fontSize={['lg', 'xl', '2xl']}
    lineHeight="1.4"
    as="p"
    fontWeight="normal"
    color="textProminent"
  >
    Nawrasse Dahman was only <Note name="Ten Years Old" words="Ten Years Old" /> when he first watched <Tip name="Ruby Sparks"> "Ruby Sparks."</Tip> By the time the credits rolled, he had already made up his mind that he wanted to be a writer.
He was convinced that if he could write a book, the main character would come to life and become his closest companion.
Unfortunately, reality did not align with his expectations, so he turned to writing horror instead.
This led to the release of his debut novella, "Strangers In The Night." I guess you could say his interpretation of “Friendship” was a little unconventional.
    I Started My Coding <Note name="Journey" words="Journey" /> Back In 2012, When I Saw An Ad For<Tip name="Khanacademy"> Khan Academy</Tip> While Browsing The Web For Games To Play, I Instantly Got Intrigued By It, And Wondered Off In My Mind Picturing Myself As A Really
    <Tip name="Cool"> Cool Hacker</Tip> Like Those In Movies, And I Actually Liked What I Saw, So Here We Are Now After <Note name="10 Years Of Coding" words="10 Years Of Coding" /> And With One <Note name="Simple Mission" words="Simple Mission" /> Is To Make Coding Easier And Accessible For Everybody To Use.
    <br />
    <br />I Worked As Staff Member At <Tip name="Discord">Discord</Tip> For Almost 4 Years, That Was My First Real Job In <Tip name="Programming">Programming</Tip>, And Then For 1 Year At <Tip name="Prisma">Prisma</Tip>, Currently I&apos;ve Been Focusing On <Tip name="Freelancing">Freelancing</Tip> And Helping People With My Code.
    <br />
    <br />
    I Love To Code With <Note name="Typescript" words="Typescript" /> And <Note name="Javascript" words="Javascript" />,
    I Use Frameworks Like <Tip name="Next.Js">Next.Js</Tip> And libraries Like <Tip name="React">React</Tip> For Basically Everything I Do.
  </Heading>
)
