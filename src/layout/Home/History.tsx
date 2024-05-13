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
    color="textProminent" >
Nawrasse Dahman was only <Note name="Ten Years Old" words="Ten Years Old" /> when he first watched <Tip name="Ruby Sparks"> "Ruby Sparks."</Tip> By the time the credits rolled, he had already made up his mind that he wanted to be a <Note name="Writer" words="Writer" />.
He was convinced that if he could write a book, the <Tip name="Main Character"> Main Character</Tip> would come to life and become his closest companion.
<br />
<br />    
Unfortunately, <Note name="Reality Did Not Align With His Expectations" words="Reality Did Not Align With His Expectations" />, so he needed to get a degree in something useful and that how his journey as a software developer began.
This led to the release of his debut novella, <Tip name="Strangers In The Night"> "Strangers In The Night."</Tip> I guess you could say his interpretation of “Friendship” was a little unconventional.
  </Heading>
)
