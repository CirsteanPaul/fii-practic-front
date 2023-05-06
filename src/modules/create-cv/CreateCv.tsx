import { useState } from 'react';
import { CreateCvContainer, CreateCvTitle, CvForm, FormsTitle, CvTextArea, CvSubmitButton } from './styles';

const CreateCv = () => {
  const [skillsText, setSkillsText] = useState<string>();
  const [activitiesText, setActivitiesText] = useState<string>();
  const [experienceText, setExperienceText] = useState<string>();

  const handleSkillsChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => setSkillsText(e.target.value);
  const handleActivitiesChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => setActivitiesText(e.target.value);
  const handleExperienceChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => setExperienceText(e.target.value);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <CreateCvContainer>
      <CreateCvTitle>Create CV</CreateCvTitle>
      <CvForm onSubmit={handleSubmit}>
        <FormsTitle>General Skills</FormsTitle>
        <CvTextArea id="skills" value={skillsText} onChange={handleSkillsChanged} />
        <FormsTitle>Extracurricular Activities</FormsTitle>
        <CvTextArea id="activities" value={activitiesText} onChange={handleActivitiesChanged} />
        <FormsTitle> Experience</FormsTitle>
        <CvTextArea id="experience" value={experienceText} onChange={handleExperienceChanged} />
        <CvSubmitButton type="submit">Upload</CvSubmitButton>
      </CvForm>
    </CreateCvContainer>
  );
};

export default CreateCv;
