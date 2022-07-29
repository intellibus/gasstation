import { suite } from 'uvu';
import * as assert from 'uvu/assert';
import { project } from '../src';

const test = suite('Gas Station Initial Setup');

test('Project Name is Correct', async () => {
  assert.equal(project, 'gasstation');
});

export const { run } = test;
