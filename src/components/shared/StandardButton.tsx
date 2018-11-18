import React, { Component } from 'react';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { WithStyles, createStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = ({ palette }: Theme) => createStyles({
  standardButton: {
    color: palette.primary.main
  },
});

interface StandardButtonProps extends WithStyles<typeof styles> {
  children: React.ReactNode;
}

const StandardButton = withStyles(styles)(({children, classes} : StandardButtonProps) => 
  <Button className={classes.standardButton} variant="outlined">{children}</Button>
)

export default StandardButton
