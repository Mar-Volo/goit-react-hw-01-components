import PropTypes from 'prop-types';

import { Section } from './Stats.styled';
import { Title } from './Stats.styled';
import { List } from './Stats.styled';
import { Label } from './Stats.styled';
import { Percent } from './Stats.styled';

import { randomHexColor } from '../Utilits/colorChange';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li key={id} style={{ backgroundColor: randomHexColor() }}>
              <Label>{label}</Label>
              <Percent>{percentage}%</Percent>
            </li>
          );
        })}
      </List>
    </Section>
  );
};

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};
