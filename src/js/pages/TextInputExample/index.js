import React, { Suspense, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Button, Heading, TextInput, Paragraph } from 'grommet';
import { Link } from 'react-router-dom';

const TextInputExample = () => {
  const { t, i18n } = useTranslation();
  const [value, setValue] = useState('');
  const [language, setLanuage] = useState('en');

  const changeLanguage = (lng) => {
    if (lng !== language) {
      setLanuage(lng);
      setValue('');
      i18n.changeLanguage(lng);
    }
  };

  return (
    <Box align="center">
      <Paragraph textAlign="center">
        This example uses react-i18next to translate TextInput's placeholder,
        and suggestions props.
      </Paragraph>
      <Box>
        <TextInput
          placeholder={t('greetings.option1')}
          suggestions={[
            t('greetings.option1'),
            t('greetings.option2'),
            t('greetings.option3'),
          ]}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onSelect={(e) => setValue(e.suggestion)}
        />
      </Box>
      <Box gap="small" align="center">
        <Paragraph>Change from English to Hawaiian</Paragraph>
        <Button onClick={() => changeLanguage('eng')} label="English" />
        <Button onClick={() => changeLanguage('haw')} label="Hawaiian" />
      </Box>
      <Link to={`/`}>
        <Heading level="4">Back</Heading>
      </Link>
    </Box>
  );
};

const Loader = () => (
  <Box>
    <Box>loading...</Box>
  </Box>
);

export default () => {
  return (
    <Suspense fallback={<Loader />}>
      <TextInputExample />
    </Suspense>
  );
};
