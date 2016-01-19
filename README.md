<<<<<<< HEAD
# Bob

Bob is a lackadaisical teenager. In conversation, his responses are very limited.

Bob answers 'Sure.' if you ask him a question.

He answers 'Whoa, chill out!' if you yell at him.

He says 'Fine. Be that way!' if you address him without actually saying
anything.

He answers 'Whatever.' to anything else.

## Instructions

Run the test file, and fix each of the errors in turn. When you get the
first test to pass, go to the first pending or skipped test, and make
that pass as well. When all of the tests are passing, feel free to
submit.

Remember that passing code is just the first step. The goal is to work
towards a solution that is as readable and expressive as you can make
it.

Please make your solution as general as possible. Good code doesn't just
pass the test suite, it works with any input that fits the
specification.

Have fun!

=======
# Hamming

Write a program that can calculate the Hamming difference between two DNA strands.

A mutation is simply a mistake that occurs during the creation or
copying of a nucleic acid, in particular DNA. Because nucleic acids are
vital to cellular functions, mutations tend to cause a ripple effect
throughout the cell. Although mutations are technically mistakes, a very
rare mutation may equip the cell with a beneficial attribute. In fact,
the macro effects of evolution are attributable by the accumulated
result of beneficial microscopic mutations over many generations.

The simplest and most common type of nucleic acid mutation is a point
mutation, which replaces one base with another at a single nucleotide.

By counting the number of differences between two homologous DNA strands
taken from different genomes with a common ancestor, we get a measure of
the minimum number of point mutations that could have occurred on the
evolutionary path between the two strands.

This is called the 'Hamming distance'.

It is found by comparing two DNA strands and counting how many of the
nucleotides are different from their equivalent in the other string.

    GAGCCTACTAACGGGAT
    CATCGTAATGACGGCCT
    ^ ^ ^  ^ ^    ^^

The Hamming distance between these two DNA strands is 7.

# Implementation notes

The Hamming distance is only defined for sequences of equal length. This means
that based on the definition, each language could deal with getting sequences
of equal length differently.
>>>>>>> 4ca8bb1282e814e940814bfa58a814415a008eff

## Setup

Go through the setup instructions for JavaScript to
install the necessary dependencies:

http://help.exercism.io/getting-started-with-javascript.html

## Making the Test Suite Pass

Execute the tests with:

```bash
$ jasmine-node .
```

In many test suites all but the first test have been skipped.

Once you get a test passing, you can unskip the next one by
changing `xit` to `it`.


## Source

<<<<<<< HEAD
Inspired by the 'Deaf Grandma' exercise in Chris Pine's Learn to Program tutorial. [view source](http://pine.fm/LearnToProgram/?Chapter=06)
=======
The Calculating Point Mutations problem at Rosalind [view source](http://rosalind.info/problems/hamm/)
>>>>>>> 4ca8bb1282e814e940814bfa58a814415a008eff
