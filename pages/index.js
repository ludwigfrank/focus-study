import React from 'react'
import 'isomorphic-unfetch'

import { Flex, Box, Section } from '../components/Layout'
import Typography from '../components/Typography'

import sheetData from '../lib/api/fake-data'
import Sheet from '../lib/sheet'
import Visualization from '$components/Visualization/components/Vis'
import parser from '../lib/api/data-parser'

const Home = props => {
    const sheet = new Sheet(props.sheetData.values)

    const dempographics = props.sheetData.values.reduce(
        (acc, cur, ind) => {
            if (cur[1].includes('Male')) {
                acc.values[0].male += 1
            } else if (cur[1].includes('Female')) {
                acc.values[0].female += 1
            }

            return acc
        },
        {
            type: 'bar-stacked-horizontal',
            keys: ['female', 'male'],
            max: 23,
            legend: true,
            values: [
                {
                    male: 0,
                    female: 0,
                },
            ],
        }
    )

    const legitValues = ['1', '2', '3', '4', '5']
    const axisValues = ['Never', 'Sometimes', 'Neutral', 'Often', 'Allways']
    const checkPhoneMorningStacked = props.sheetData.values.reduce(
        (acc, answers, ind) => {
            if (legitValues.includes(answers[10])) {
                const index = acc.values.findIndex(
                    value => value.key === answers[10]
                )
                acc.values[index].checked += 1
            }

            return acc
        },
        {
            type: 'bar-stacked-vertical',
            keys: ['checked'],
            max: 14,
            axisHorizontal: axisValues,
            values: legitValues.map(key => {
                return {
                    key,
                    checked: 0,
                }
            }),
        }
    )

    return [
        <Section key="Header" mt={6}>
            <Flex justifyContent="center">
                <Box width={8 / 12}>
                    <Typography type="h1">How we Focus</Typography>
                </Box>
            </Flex>
        </Section>,
        <Section key="Intro">
            <Flex justifyContent="center">
                <Box width={8 / 12}>
                    <Typography type="h3">Intro</Typography>
                    <Typography type="body1">
                        Techniques like screen time analysis have recently found
                        their way in iOS, Android and their Applications. Still,
                        the interplay between applications lacks behind. As
                        presented in the following research, most users do not
                        know about those analysis tools and are thus unaware of
                        the interruptions their devices cause. Attention has
                        become a scarce commodity. Name it "Flow" or "Deep Work"
                        – our ability to stay committed to a task for more
                        extended periods crippled by the endless stream of
                        unconsidered notifications. How can findings from
                        psychology and cognitive science be used for, to achieve
                        a holistic approach to better focus? How might the
                        calendar, email and chat applications work together to
                        accomplish a distraction-free work environment? How
                        aware are users by the distractions their devices cause?
                        In finding answers to those questions, I hope to gather
                        information to eventually help in creating empowering
                        products that enhance abilities and values of humans
                        rather than corporations.
                    </Typography>
                </Box>
            </Flex>

            <Flex justifyContent="center">
                <Box width={10 / 12}>
                    <Visualization data={dempographics} />
                </Box>
            </Flex>
            <Flex justifyContent="center">
                <Box width={8 / 12}>
                    <Typography type="h3">Waking up</Typography>
                    <Typography type="body1">
                        This is a study on how mobile phones steal our time.
                    </Typography>
                </Box>
            </Flex>
            <Flex justifyContent="center">
                <Box width={10 / 12} height={'100%'}>
                    <Visualization data={checkPhoneMorningStacked} />
                </Box>
            </Flex>
            <Flex justifyContent="center">
                <Box width={8 / 12}>
                    <Typography type="body1">
                        This is a study on how mobile phones steal our time.
                    </Typography>
                </Box>
            </Flex>
        </Section>,
    ]
}

Home.getInitialProps = async () => {
    // const res = await fetch(requestUrl)
    // const data = await res.json()

    return {
        sheetData: sheetData.sheetData,
    }
}

export default Home
