import styled from "@emotion/styled";

export const List = styled.ul`
	margin-top: 50px;
  margin-left: 400px;
  margin-bottom: 50px;
	display: flex;
	flex-direction: column;
	justify-items: flex-end;
  gap: 20px;
`;

export const Item = styled.li`
	display: flex;
	gap: 14px;
`;

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
`;

export const Title = styled.h2`
	color: var(--White, #fff);
	font-family: Manrope;
	font-size: 24px;
	font-style: normal;
	font-weight: 600;
	line-height: 28px;
`;

export const Text = styled.p`
	color: rgba(18, 20, 23, 0.5);
	font-family: Manrope;
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
	line-height: 24px;
`;