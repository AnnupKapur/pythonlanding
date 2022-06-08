import { 
  Button, 
  Title, 
  Text, 
  Paper 
} from '@mantine/core';
import React from 'react'
import { useStyles } from './PlanSelect.style'
import { GrFormNext } from 'react-icons/gr'

type Props = {}

const PlanSelect = (props: Props) => {
	const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <Title>Select a payment option which suits you ?</Title>
      <div className={classes.plans}>
        
        <Paper shadow="sm" radius="md" p="md" withBorder>
          <Title order={4} className={classes.price}>monthly</Title>
          <Text>
            £
            <span className={classes.priceNumbers}>19.50</span>
            / week
          </Text>
          <Text>
            <span className={classes.textHighlightPositive}>
              Save £20+ per month 
            </span>
            by choosing monthly payments.
          </Text>
        </Paper>

        <Paper shadow="sm" radius="md" p="md" withBorder>
          <Title order={4} className={classes.price}>weekly</Title>
          <Text>
            £
            <span className={classes.priceNumbers}>24.50</span>
            / week
          </Text>
          <Text>
            Did you know that you could
            <span className={classes.textHighlightNegative}>
              save £5 per week
            </span>
            by choosing the other option.
          </Text>
        </Paper>

      </div>
      <Button
        variant="outline"
        size="xl"
        color='green'
        className={classes.btnNext}
        onClick={()=>{
          console.log('clicked next')
        }}
        >
          Next
          <GrFormNext />
      </Button>
    </div>
  )
}

export default PlanSelect