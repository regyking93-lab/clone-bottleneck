import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type ProcessStepProps = {
  step: number;
  title: string;
  description: string;
};

export function ProcessStep({ step, title, description }: ProcessStepProps) {
  return (
    <Card className="border-none bg-transparent shadow-none">
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">
        <Badge className="mt-1 size-10 shrink-0 rounded-full bg-gold text-base font-semibold text-white">
          {step}
        </Badge>
        <div>
          <CardTitle className="font-heading text-xl text-charcoal">{title}</CardTitle>
          <CardDescription className="mt-2 text-base leading-relaxed text-muted-foreground">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="hidden" />
    </Card>
  );
}
