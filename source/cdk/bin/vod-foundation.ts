#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { DefaultStackSynthesizer } from 'aws-cdk-lib';
import { AwsSolutionsChecks } from 'cdk-nag';
import { VodFoundation } from '../lib/vod-foundation-stack';

function createVodFoundationApp(app: cdk.App) {
  return new VodFoundation(app, 'VodFoundation', {
    synthesizer: new DefaultStackSynthesizer({
      generateBootstrapVersionRule: false
    })
  });
}

const app = new cdk.App();

createVodFoundationApp(app);

//cdk nag
cdk.Aspects.of(app).add(new AwsSolutionsChecks({ verbose: true }));
