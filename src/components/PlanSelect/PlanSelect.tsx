import { 
  Button, 
  Title, 
  Text, 
  Paper 
} from '@mantine/core';
import React from 'react'
import { useStyles } from './PlanSelect.style'

type Props = {}

const PlanSelect = (props: Props) => {
	const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <Title className={classes.title}>Select a payment option which suits you ?</Title>
      <div className={classes.plans}>
        
        <Paper radius="md" p="md" withBorder className={classes.plan}>
          <Title order={4} className={classes.regularity}>monthly</Title>
          <Text className={classes.price}>
            £
            <span className={classes.priceNumbers}>19.50</span>
            / week
          </Text>
          <Text className={classes.cardContent}>
            <span className={classes.textHighlightPositive}>
              Save £20+ per month
            </span>
            {' with this option'}
          </Text>
          <Text className={classes.subtext}>
              charged at £84.50 per month
          </Text>
        </Paper>

        <Paper radius="md" p="md" withBorder className={classes.plan}>
          <Title order={4} className={classes.regularity}>weekly</Title>
          <Text className={classes.price}>
            £
            <span className={classes.priceNumbers}>24.50</span>
            / week
          </Text>
          <Text className={classes.cardContent}>
            Choose the other option to save money.
          </Text>
          <Text className={classes.subtext}>
              eœquivalent to £106 per month
          </Text>
        </Paper>

      </div>
    </div>
  )
}

export default PlanSelect